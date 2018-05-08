package com.filesvc.controller;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.filesvc.dto.TreeItem;

@RestController
public class FileServiceController {
	
	
	// TreeNode tn;
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getAlbums")
	public HttpEntity<String> getAlbums() throws Exception {		
		String resJson = "{\r\n" + 
				"  \"id\": 1,\r\n" + 
				"  \"artist\": \"The Prependers\",\r\n" + 
				"  \"album\": {\r\n" + 
				"    \"name\": \"Opacity Zero\",\r\n" + 
				"    \"releaseDate\": \"September 25, 2014\",\r\n" + 
				"    \"coverImage\": \"assets/opacity-zero.jpg\"\r\n" + 
				"  }\r\n" + 
				"}" ;
		return new ResponseEntity<String>(resJson, HttpStatus.OK);
	}

	// TreeNode tn;
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getDirStructure")
	public HttpEntity<List<TreeItem>> fileContent(@RequestParam(value = "dir") String dir) throws Exception {
		List<TreeItem> treeList = new ArrayList<TreeItem>();
		File file = new File(dir);
		if (file != null && file.exists()) {
			TreeItem rootItem = new TreeItem();
			rootItem.setName("root");
			rootItem.setExpand(true);
			String id = "1";
			rootItem.setID(id);
			rootItem.setFullPath(file.getAbsolutePath());
			//rootItem.setFullPath(rootItem.getName());
			treeList.add(rootItem);
			if (file.isDirectory()) {				
				addChildren(file, id, treeList);
			}
		}
		return new ResponseEntity<List<TreeItem>>(treeList, HttpStatus.OK);
	}

	private void addChildren(File file, String parentID, List<TreeItem> treeList) {
		List<File> childFilesList = Arrays.asList(file.listFiles());
		if (!CollectionUtils.isEmpty(childFilesList)) {
			int i = 1;
			for (File childFile : childFilesList) {
				if (childFile != null && childFile.exists()) {
					TreeItem item = new TreeItem();
					item.setName(childFile.getName());
					item.setExpand(childFile.isDirectory());
					item.setID(parentID + "_" + i++);
					item.setCatagoryId(parentID);
					item.setFullPath(childFile.getAbsolutePath());
					//item.setFullPath(childFile.getName());
					treeList.add(item);
					if (childFile.isDirectory()) {
						addChildren(childFile, item.getID(), treeList);
					}
				}
			}
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getFileContent")
	public HttpEntity<String> getFileContent(@RequestParam(value = "fileName") String fileName) throws Exception {
		return new ResponseEntity<String>(readFile(fileName), HttpStatus.OK);
	}

	private static String readFile(String filePath) {
		StringBuilder contentBuilder = new StringBuilder();
		try (Stream<String> stream = Files.lines(Paths.get(filePath), StandardCharsets.UTF_8)) {
			stream.forEach(s -> contentBuilder.append(s).append("\n"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return contentBuilder.toString();
	}
}