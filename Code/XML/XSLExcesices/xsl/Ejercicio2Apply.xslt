<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    #first{
                    font-size: 30px;
                    }
                    #second{
                    color: blue;
                    }
                    #third{
                    color: green;
                    }
                    #fourth{
                    color: red;
                    }
                    #fifth{
                    color: grey;
                    }
                    div {
                    padding: 5px 0px;
                    }
                    #student {
                    padding: 10px 0px;
                    }
                </style>
            </head>
            <body>
                <h1>Students</h1>
                <div>
                    <xsl:apply-templates select="class/student"/>
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="class/student">
        <div id="student">
            <div>
                <span id="first">
                    <xsl:apply-templates select="@rollno"/>
                </span>
            </div>
            <div>
                Fisrt Name:
                <span id="second">
                    <xsl:apply-templates select="firstname"/>
                </span>
            </div>
            <div>
                Last Name:
                <span id="third">
                    <xsl:apply-templates select="lastname"/>
                </span>
            </div>
            <div>
                Nick Name:
                <span id="fourth">
                    <xsl:apply-templates select="nickname"/>
                </span>
            </div>
            <div>
                Marks:
                <span id="fifth">
                    <xsl:apply-templates select="marks"/>
                </span>
            </div>
        </div>
    </xsl:template>
    <xsl:template match="@rollno">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="fisrtname">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="lastname">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="nickname">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="marks">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>