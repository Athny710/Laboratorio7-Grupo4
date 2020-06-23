package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Sistema {
    @GetMapping(value = {"","/"})
    public String index(){
        return  "index";
    }
    @GetMapping("detalle")
    public String detalle(){
        return "detallePais/detallePais1";
    }
    @GetMapping("grafico")
    public String grafico(){
        return "grafico/graficoEvolutivo";
    }
}
