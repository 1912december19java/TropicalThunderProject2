package com.tropicthunder.controllers;

import java.io.IOException;

import javax.servlet.annotation.MultipartConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tropicthunder.services.VideoUploadService;

@RestController
@RequestMapping("/video")
@CrossOrigin
@MultipartConfig(fileSizeThreshold = 1024 * 1024 *10, // 10 MB
maxFileSize = 1024 * 1024 * 10, // 10 MB
maxRequestSize = 1024 * 1024 * 15 // 15 MB
)
public class VideoUploadController {


	@Autowired
	private VideoUploadService videoUploadService;
	
	@PostMapping(consumes = "multipart/form-data")
	@ResponseStatus(code = HttpStatus.CREATED)
		public String handleFileUpload(@RequestPart MultipartFile file) {

			try {
				System.out.println(videoUploadService.uploadToS3(file));
			} catch (IOException e) {
				System.out.println("failed to upload");
				e.printStackTrace();
			}
			return "Success";
		}
}
