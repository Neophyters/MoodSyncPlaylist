package com.neophyters.moodsyncapp.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpotifyToken {

    @JsonProperty("access_token")
    String access_token;

    @JsonProperty("token_type")
    String token_type;

    @JsonProperty("expires_in")
    int expires_in;

}
