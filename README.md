# NhacCuaTui.Com without vip Account

This useful gadge helps us download playlist from nhaccuatui.com without VIP account.

## Step 1 - Get urls with javascript.

- Open following url on the Chrome and has access to the "Develop Tools" by pressing F12.
    - Sample URL: https://www.nhaccuatui.com/playlist/linh-muc-nguyen-sang-dang-cap-nhat.5ptBiRlMYiJB.html

- Copy raw codes in `script.js` file and execute (paste and hit enter) it in `Console` section from Develop side bar.

![Shell](/screenshots/raw-code.png?raw=true)

- The above script will download a file automatically, namely `fileList.txt`. Moving this file to the same folder with `shell.sh` to download in step 2.

## Step 2 - Download file with bash script.

- Before executing the `shell.sh` sript, please review the source code and make sure that you have had `fileList.txt` file and `mp3` folder in the same place.

![Shell](/screenshots/file-structures.png?raw=true)

- Executing the script and check your files.

![Shell](/screenshots/shell.png?raw=true)