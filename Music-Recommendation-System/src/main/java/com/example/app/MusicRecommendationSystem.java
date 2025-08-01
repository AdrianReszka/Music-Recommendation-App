package com.example.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaRepositories(basePackages = "com.example.repository")
@SpringBootApplication(scanBasePackages = "com.example")
@EntityScan(basePackages = "com.example.model")
public class MusicRecommendationSystem {

	public static void main(String[] args) {
		SpringApplication.run(MusicRecommendationSystem.class, args);

	}
}
