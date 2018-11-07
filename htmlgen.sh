#!/bin/sh
#
# htmlgen.sh
# - creates an empty html file

touch "$1"
echo "<!DOCTYPE html>\n"\
"<html>\n"\
"\t<head>\n"\
"\t\t<meta charset=\"UTF-8\">\n"\
"\t\t<meta name=\"viewport\"\n"\
"\t\tcontent=\"width=divice-width, user-scalable=no, initial-scale=1.0\">\n"\
"\t\t<meta http-equiv=\"X-UA-Compatable\" content=\"ie=edge\">\n"\
"\t\t<style></style>\n"\
"\t</head>\n"\
"\t<body>\n"\
"\t\t<header>\n"\
"\t\t</header>\n"\
"\t\t<main>\n"\
"\t\t</main>\n"\
"\t\t<footer>\n"\
"\t\t</footer>\n"\
"\t</body>\n"\
"</html>" | sed 's/[\t]/    /g' > "$1"