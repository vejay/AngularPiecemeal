open class Greeting: DefaultTask() {
    lateinit var message: String
    lateinit var recipient: String

    @TaskAction
    fun sayGreeting(){
        println("From Kotlin File in package: $message, $recipient")
    }

}