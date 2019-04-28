package com.sample.demo

import org.sample.demo.Greeting
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

class Servlet : SpringBootServletInitializer() {

    override fun configure(application: SpringApplicationBuilder) : SpringApplicationBuilder {
        return application.sources(Greeting::class.java)
    }
}

