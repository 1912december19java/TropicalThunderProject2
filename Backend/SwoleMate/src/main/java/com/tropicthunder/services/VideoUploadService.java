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

	    if (fileName.endsWith(".mp4") || fileName.endsWith(".png") || fileName.endsWith(".JPG")
	        || fileName.endsWith(".PNG")) {
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
	      // the file was not a JPG or PNG
	      return null;
	    }
	  }

}
