<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    #firstname {
                        color: blue;
                    }
                    #lastname {
                        color: green;
                    }
                    #nickname {
                        color: red;
                    }
                    #mark {
                        color: grey;
                    }
                </style>
            </head>
            <body>
                <h1>Students</h1>
                    <xsl:for-each select="class/student">
                        <h2><xsl:value-of select="@rollno"/></h2>
                        <h5>First Name:<span id="firstname"><xsl:value-of select="firstname"/></span></h5>
                        <h5>Last Name:<span id="lastname"><xsl:value-of select="lastname"/></span></h5>
                        <h5>Nick Name:<span id="nickname"><xsl:value-of select="firstname"/></span></h5>
                        <h5>Mark:<span id="mark"><xsl:value-of select="marks"/></span></h5>
                    </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
