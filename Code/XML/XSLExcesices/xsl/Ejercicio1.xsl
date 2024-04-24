<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <head>
                    <link rel="stylesheet" href="../css/style.css"></link>
                </head>
                <style>
                    div {
                        padding: 0px 20px;
                        width: 30%;
                        border-left: solid blue 3px;
                        border-right: solid blue 3px;
                    }
                </style>
                <div>
                    <h1>My CD collection</h1>
                    <ol>
                        <xsl:for-each select="catalog/cd">
                            <li>
                                <xsl:value-of select="title"/>
                                from <xsl:value-of select="artist"/>
                            </li>
                        </xsl:for-each>
                    </ol>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>