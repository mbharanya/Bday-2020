import java.lang.RuntimeException
import java.math.BigInteger
import java.security.MessageDigest

object Main extends App {
  val searchMd5 = new BigInteger("7397c6177b50f4131f9b67f454faee2f", 16).toByteArray.drop(1)

  val salt = "\uD83E\uDDC2"

  val min = 1
  val max = 6
  val options = ('A' to 'z').filter(c => "[a-zA-Z]".r.pattern.matcher(c + "").matches()).toList
  println(options.mkString(","))
  println(toHex(md5("happy" + salt)))

  val start = System.nanoTime()
  try {
    for {
      i <- min to max
      combinations <- combinations(i, options).map(_.mkString(""))
      _ = if (md5(combinations + salt).sameElements(searchMd5)) {
        throw new RuntimeException((combinations, i).toString())
      }
    } yield ()
  } catch {
    case e: RuntimeException => {
      val endTime = System.nanoTime() - start
      println(e.getMessage)
      println(endTime / 1000 / 1000 / 1000 + "s")
    }
  }
  println("Done searching!")


  def combinations[T](n: Int, l: List[T]): List[List[T]] =
    n match {
      case 0 => List(List())
      case _ => for (el <- l;
                     sl <- combinations(n - 1, l dropWhile {
                       _ != el
                     }))
        yield el :: sl
    }

  lazy val digest = MessageDigest.getInstance("MD5")

  def md5(s: String) = {
    digest.digest(s.getBytes)
  }

  def toHex(bytes: Array[Byte]): String = {
    val sb = new StringBuilder
    for (b <- bytes) {
      sb.append(String.format("%02x", Byte.box(b)))
    }
    sb.toString
  }


}