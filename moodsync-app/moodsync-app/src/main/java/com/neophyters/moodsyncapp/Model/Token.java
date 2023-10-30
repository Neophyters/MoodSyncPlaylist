package com.neophyters.moodsyncapp.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Token {
    String access_token;
    String token_type;
    int expires_in;
}
