package org.sample.demo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HelloServletTest {

    @Mock
    private HttpServletRequest req;
    @Mock
    private HttpServletResponse resp;
    @Mock
    private RequestDispatcher dispatcher;


    public void testDoGet() throws IOException {
        //Test method
        HelloServlet servlet = new HelloServlet();

        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);

        Mockito.when(resp.getWriter()).thenReturn(printWriter);

        servlet.doGet(req, resp);

        assertEquals(stringWriter.toString(), "Hello World!");
    }

    public void testDoPostEmpty() {

    }

    public void testDoPostWithValue() {

    }
}

