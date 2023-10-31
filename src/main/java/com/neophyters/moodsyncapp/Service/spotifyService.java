package com.neophyters.moodsyncapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class spotifyService {

    private String clientKey="70055440af4d4ee081707aa8ff83f28d";
    private String clientSecret="6ae07eeb0ae74640ba96e6c77d3d467f";

    private String tokenURL = "https://accounts.spotify.com/api/token";


    public String getSpotifyCredentials() {

        String authKey = clientKey + ":" + clientSecret;

        authKey = Base64.getEncoder().encodeToString(authKey.getBytes());

        return authKey;
    }

    public String getTokenURL() {
        return this.tokenURL;
    }

}
