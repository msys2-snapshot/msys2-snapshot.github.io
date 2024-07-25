var url = location.href;
alert(url);
url = url.replace("https://msys2-snapshot.github.io/", "https://downloads.sourceforge.net/project/msys2-snapshot/files/");
alert(url);
location.href = url;

