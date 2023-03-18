![image](https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1673222340274x294259935593612640%2FOut%2520of%2520Character%2520Radio%2520Logo%2520%2528microphone%2529.png?w=192&h=57&auto=compress&dpr=1&fit=max)

# oocradio-wrapper
An API wrapper for oocradio.com because I was bored...

# Examples
## Getting Setup
```js
const OOCRadio = require('./index.js')

const oocradio = new OOCRadio({ version: '1.1' }) // Takes in the version of the api you want to use 
```

## Get Current Song
```js 
oocradio.getCurrentSong().then(data => console.log(data))
```

<details>
    <summary>Returns</summary>
    
```json
{
    "status": string,
    "response": {
        "Artist": string,
        "Title": string,
        "Cover": string/url,
    }
}
```
</details>

## Get Next Live
```js 
oocradio.nextLive().then(data => console.log(data))
```

<details>
<summary>Returns</summary>
    
```json
{
    "status": string,
    "response": {
      "Name": string,
      "Show_Name": string,
      "Date": number,
      "Artwork": string/url,
      "Exists": boolean,
    }
}
```
</details>

## Get Live Data
```js 
oocradio.getLiveData().then(data => console.log(data))
```
<details>
<summary>Returns</summary>
    
```json
{
    "status": string,
    "response": {
      "Artist": string,
      "Title": string,
      "Cover": string/url,
      "OnAir_Name": string,
      "OnAir_Artwork": string/url,
      "Spotify_URL": string/url,
    }
}
```
</details>

# Credits
- [@Hyperz](https://bosssoftware.net) *Writing this extremely simple wrapper.*
- [@Shawn E.](https://github.com/Shawn-E) *Rewriting to change to a constructor*

