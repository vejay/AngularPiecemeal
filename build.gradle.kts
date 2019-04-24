plugins {
    war
    id("org.gretty") version "2.2.0"
}

repositories {
    jcenter()
}

dependencies {
    providedCompile("javax.servlet:javax.servlet-api:3.1.0") 
    testImplementation("org.mockito:mockito-core:2.7.19")
    testImplementation ("org.junit.jupiter:junit-jupiter-api:5.5.0-M1")
    testImplementation ("org.junit.jupiter:junit-jupiter:5.5.0-M1")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.5.0-M1")
}

gretty{
    httpPort = 8090
    contextPath = "/"
}

open class Greeting: DefaultTask() {
    lateinit var message: String
    lateinit var recipient: String

    @TaskAction
    fun sayGreeting(){
        println("From Kotlin File: $message, $recipient")
    }

}

tasks.register<Greeting>("helloKotlin"){
    group = "Welcome"
    description = "Displays a Kotlin Hello Message."

    message =  "Hello"
    recipient = "KotlinUser"
}

tasks.register<Greeting>("helloGradle"){
    group = "Welcome"
    description = "Displays a Gradle Hello Message."

    message =  "Hello"
    recipient = "GradleUser"
}

tasks.register<Exec>("dir") {
    description = "Displays directory contents."

    commandLine = listOf("ls")
}

tasks.register<Exec>("buildNg") {
    group = "Build"
    description = "Builds Angular modules."

    commandLine = listOf("npm", "run", "build")
}

tasks.register<Copy>("copyNgFiles") {
    group = "Copy"
    description = "Copy compiled angular files to build directory."

    from("dist/NonAngularAsMain")
    into("build/inplaceWebapp")
}

tasks.register<GradleBuild>("buildAndRun") {
    group = "Run"
    description = "Builds and runs the application."

    tasks = listOf("clean", "build", "buildNg", "copyNgFiles", "appRun")
}

