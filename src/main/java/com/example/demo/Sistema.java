package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Sistema {
    @GetMapping(value = {"","/"})
    public String index(){
        return  "index";
    }
    @GetMapping("detalle")
    public String detalle(){
        return  "detallePais/detallePais";
    }
    @GetMapping("grafico")
    public String grafico(){
        return "grafico/graficoEvolutivo";
    }
}
