package com.neophyters.moodsyncapp.Controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.neophyters.moodsyncapp.Model.SpotifyToken;
import com.neophyters.moodsyncapp.Service.SpotifyService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RequestMapping("/spotify")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SpotifyController {

    private static final Logger logger = LoggerFactory.getLogger(SpotifyController.class);

    @Autowired
    SpotifyService spotifyService = new SpotifyService();

    public String getSpotifyData(String url) {

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + getToken());
        
        URI uri;
        try {
            uri = new URI(url);
        } catch (URISyntaxException e) {
            e.printStackTrace();
            logger.error("URI Syntax Exception", e);
            return null;
        }

        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<String> responseEntity = new RestTemplate().exchange(uri, HttpMethod.GET, request, String.class);

        if (responseEntity.getStatusCode() == HttpStatus.OK) {
                return responseEntity.getBody();
        } else {
            logger.error("Error occurred while fetching playlist. Status code: " + responseEntity.getStatusCode());
            return "Error occurred while fetching playlist. Status code: " + responseEntity.getStatusCode();
        }
    }

    //Get Spotify API Token
    @PostMapping("/token")
    public String getToken() {

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + spotifyService.getSpotifyCredentials());
        headers.set("Content-Type", "application/x-www-form-urlencoded");

        String bodyParam = "grant_type=client_credentials";

        URI uri;
        try {
            uri = new URI(spotifyService.getTokenURL());
        } catch (URISyntaxException e) {
            e.printStackTrace();
            logger.error("URI Syntax Exception", e);
            return null;
        }

        HttpEntity<String> request = new HttpEntity<>(bodyParam, headers);

        try {
            ResponseEntity<SpotifyToken> responseEntity = new RestTemplate().exchange(uri, HttpMethod.POST, request, SpotifyToken.class);

            if (responseEntity.getStatusCode() == HttpStatus.OK) {
                return responseEntity.getBody().getAccess_token();
            } else {
                logger.error("Error occurred while fetching token. Status code: " + responseEntity.getStatusCode());
                return "Error occurred while fetching token. Status code: " + responseEntity.getStatusCode();
            }
        } catch (Exception e) {
            logger.error("An error occurred during the request: ", e);
            return "An error occurred during the request: " + e;
        }
    }


    //Get Playlist of a Category
    @GetMapping("/{category}/playlist")
    public String getCategoryPlaylist(@PathVariable String category) {
        return getSpotifyData(spotifyService.getCategoryPlaylistURL(category));
    }
    
    @GetMapping("/browse/categories")
    public String getSeveralBrowseCategory(@RequestParam String limit, @RequestParam String offset) {
        return getSpotifyData(spotifyService.getSeveralBrowseCategoryURL(limit, offset));
    }

}
