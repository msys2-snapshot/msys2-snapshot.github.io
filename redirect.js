var url = location.href;
alert(url);
url1 = url.replace("https://msys2-snapshot.github.io/msys2?", "");
alert(url1);
url = url.replace("https://msys2-snapshot.github.io/msys2?", "https://downloads.sourceforge.net/project/msys2-snapshot/files/msys2/");
alert(url);
location.href = url;

