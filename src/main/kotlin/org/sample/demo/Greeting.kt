package org.sample.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

@SpringBootApplication
class Greeting : SpringBootServletInitializer()

fun main(args: Array<String>) {
    runApplication<Greeting>(*args) //Equivalent of SpringApplication.run(Greeting::class.java, *args)

}