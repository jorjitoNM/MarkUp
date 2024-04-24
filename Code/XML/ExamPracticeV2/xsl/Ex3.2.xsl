<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    *{
                        text-align:center;
                    }
                    table {
                        border-collapse: collapse;
                    }
                    th,td {
                        border: solid 2px black;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Details</th>
                        <th>Precio sin IVA</th>
                        <th>Precio con IVA</th>
                    </tr>
                    <xsl:apply-templates select="shop/article"/>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="shop/article">
        <tr>
            <td>
                <xsl:value-of select="details"/>
            </td>
            <td>
                <xsl:value-of select="price"/>
            </td>
            <td>
                <xsl:value-of select="price*1.21"/>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>