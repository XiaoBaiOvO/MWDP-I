package com.mwdpI.common.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/project")
public class ServiceController {

    @RequestMapping("/test")
    public String test() {
        System.out.println("testing!!!");
        String resp = "HMQ";
        resp = resp + "大聪明";
        resp += "!";
        return resp;
    }

}
