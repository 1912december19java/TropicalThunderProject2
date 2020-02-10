package com.tropicthunder.services;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class VideoUploadService {
	
	public String uploadToS3(MultipartFile file) throws IOException {
	    String fileName = file.getName();

	    if (fileName.endsWith(".mp4") || fileName.endsWith(".MP4") || fileName.endsWith(".mP4")
	        || fileName.endsWith(".ogg") || fileName.endsWith(".Ogg") || fileName.endsWith(".oGg")
	        || fileName.endsWith(".ogG") || fileName.endsWith(".Webm") || fileName.endsWith(".WEbm")
	        || fileName.endsWith(".WEBm") || fileName.endsWith(".WEBM") || fileName.endsWith(".wEbm")
	        || fileName.endsWith(".wEBm") || fileName.endsWith(".wEBM") || fileName.endsWith(".weBm")
	        || fileName.endsWith(".weBM") || fileName.endsWith(".webM") || fileName.endsWith(".webm")) {
	      InputStream fileInputStream = file.getInputStream();
	      String accessKeyId = (System.getenv("aws_key_id"));
	      String secretAccessKey = (System.getenv("aws_access_key"));
	      String bucketName = (System.getenv("aws_bucket_name"));
	      String subdirectory = "testing/";

	      BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKeyId, secretAccessKey);

	      AmazonS3 s3client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(awsCreds)).build();

	      ObjectMetadata metadata = new ObjectMetadata();
	      metadata.setContentLength(file.getSize());

	      PutObjectRequest uploadRequest =
	          new PutObjectRequest(bucketName, subdirectory + fileName, fileInputStream, metadata);

	      uploadRequest.setCannedAcl(CannedAccessControlList.PublicRead);

	      s3client.putObject(uploadRequest);

	      return "http://s3.amazonaws.com/" + bucketName + "/" + subdirectory + fileName;

	    } else {
	      // the file was not a compatible video format
	      return null;
	    }
	  }

}
