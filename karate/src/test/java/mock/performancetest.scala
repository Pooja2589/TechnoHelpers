package mock

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class performancetest extends Simulation {

  MockUtils.startServer()

  val posttest = scenario("soap").exec(karateFeature("classpath:mock/2.feature"))
  val gettest = scenario("countries").exec(karateFeature("classpath:mock/countries.feature"))

  setUp(
    posttest.inject(rampUsers(10) during (5 seconds)),
    //gettest.inject(rampUsers(10) during (5 seconds))
  )

}
