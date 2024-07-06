export interface ImagenByID {
    id:               number;
    width:            number;
    height:           number;
    url:              string;
    photographer:     string;
    alt:              string;
    avg_color:        string;
    liked:            boolean;
    photographer_id:  number;
    photographer_url: string;
    src:              Src;
}

export interface Src {
    landscape: string;
    large:     string;
    large2x:   string;
    medium:    string;
    original:  string;
    portrait:  string;
    small:     string;
    tiny:      string;
}
