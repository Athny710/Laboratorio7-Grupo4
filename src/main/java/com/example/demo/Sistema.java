package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class Sistema {
    @GetMapping("detalle")
    public String detalle(){
        return "detallePais/detallePais1";
    }

    @GetMapping("grafico")
    public String grafico(){

        return "grafico/graficoEvolutivo";
    }
}
