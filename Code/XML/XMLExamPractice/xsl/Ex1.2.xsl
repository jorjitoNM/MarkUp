<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                *{
                    text-align: center;
                }
                #title {
                    width: 80%;
                    margin-left: 10%;
                    border-bottom: 4px solid purple;
                }
                #maincontent {
                    margin-top: 50px;
                    width: 80%;
                    margin-left: 35%;
                }
                th,td {
                    border: 2px solid black;
                    color: black;
                    padding: 5px;
                }
                th {
                    background-color: grey;
                    color: white;
                }
                </style>
            </head>
            <body>
                <div id="title">
                    <h1>Markup Languages</h1>
                </div>
                <div id="maincontent">
                    <table>
                        <tr>
                            <th>Details</th>
                            <th>Price (tax included)</th>
                            <th>Price (without tax)</th>
                        </tr>
                        <xsl:apply-templates select="shop/article"/>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="shop/article">
        <tr>
            <td><xsl:apply-templates select="details"/></td>
            <td><xsl:apply-templates select="price"/></td>
            <td><xsl:apply-templates select="price"/></td>
        </tr>
    </xsl:template>
    <xsl:template match="details">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="price">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="price">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>