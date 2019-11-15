# PHP Web Services

## CHAPTER 1 HTTP

If `allow_url_fopen` is enabled,
it is possible to make requests using `file_get_contents()`.
The simplest example is making a GET request
and reading the response body in as if it were a local file.

``` php
$postbin = "https://postb.in/1573800685926-1449347755406";
$result = file_get_contents($postbin);
echo $result;

$data = [
    "name" => "cicada",
    "email" => "cicada@example.com"
];
$context = [
    "http" => [
        "method" => "POST",
        "header" => [
            "Accept: application/json",
            "Content-Type: application/json"],
        "content" => json_encode($data),
    ]
];
$query = ["x" => 1, "y" => 2];
$result = file_get_contents(
    $postbin . "?" . http_build_query($query),
    false, stream_context_create($context));
echo $result;
```

## CHAPTER 2 HTTP Verbs

### Serving GET Requests

URLs used with GET can be bookmarked,
they can be called as many times as needed
(the request can change the data it accesses).

A great example of using a GET request when filling in a web form
is when using a search form, which should always use GET.
Searches can be repeated safely, and the URLs can be shared.

If the request is safe to repeat, then GET is a good choice; otherwise use POST.

### Making GET Requests

``` php
<?php
$url = "http://localhost:8000/book/get-form-page.php";
$data = ["category" => "programming", "rows" => 20];
$get_addr = $url . "?" . http_build_query($data);
$page = file_get_contents($get_addr);
echo $page;
```

### Handling POST Requests

In contrast to GET requests, a POST request is one that
does cause change on the server that handles the request.
These requests shouldn't be repeated or bookmarked,
which is why your browser warns you when it is resubmitting data.

When a form is submitted via GET, we can see the variables being sent on the URL.

With POST, however, the data goes into the body of the request,
and the `Content-Type` header denotes what kind of data can be found in the body.

### Making POST Requests

``` php
<?php
$url = "http://localhost:8000/book/post-form-page.php";
$data = [
    "email" => "cicada@example.com",
    "display_name" => "LornaJane",
];
$options = [
    "http" => [
        "method" => "POST",
        "header" => "Content-Type: application/x-www-form-urlencoded",
        "content" => http_build_query($data)
    ]
];

$page = file_get_contents($url, false, stream_context_create($options));
echo $page;
```

### Using Other HTTP Verbs

``` php
<?php
$url = "http://localhost:8000/book/method-echo.php";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_exec($ch);

echo file_get_contents($url, false, stream_context_create([
    "http" => [
        "method" => "DELETE",
    ]
]));
```
## CHAPTER 3 Headers

## CHAPTER 4 Cookies

## CHAPTER 5 JSON

``` php
echo json_encode(array("message" => "hello you"));

$message_json = <<<END
  { "message": "hello you" }
END;

$data = json_decode($message_json);
var_dump($data);

$obj = new stdClass();
$obj->message = "hello you";
echo json_encode($obj) . "\n";

$data = json_decode($message_json, true);
var_dump($data);
```
