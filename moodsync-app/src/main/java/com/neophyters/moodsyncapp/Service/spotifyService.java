package com.neophyters.moodsyncapp.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class SpotifyService {
    @Value("${spotify.clientKey}")
    private String clientKey;
    
    @Value("${spotify.clientSecret}")
    private String clientSecret;

    private String tokenURL = "https://accounts.spotify.com/api/token";

    public String getSpotifyCredentials() {

        String authKey = clientKey + ":" + clientSecret;

        authKey = Base64.getEncoder().encodeToString(authKey.getBytes());

        return authKey;
    }

    public String getTokenURL() {
        return this.tokenURL;
    }

    public String getCategoryPlaylistURL(String category) {
        return "https://api.spotify.com/v1/browse/categories/" + category + "/playlists";
    }

}
