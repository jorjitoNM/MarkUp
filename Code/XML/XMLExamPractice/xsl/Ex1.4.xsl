<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
         <html>
            <head>
                <style>
                    * {
                        text-align: center;
                    }
                    table {
                        border-collapse: collapse;
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
                    #maincontent {
                        background-color: white;
                        color: black;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Article</th>
                        <th>Detail</th>
                        <th>Price (without tax)</th>
                        <th>Order</th>
                        <th>Reference</th>
                    </tr>
                    <xsl:apply-templates select="shop/article[@name='Shirt']"/>
                    <tr>
                        <td>
                            Numero total de articulos
                        </td>
                        <td colspan="4">
                            <xsl:value-of select="count(/shop/article[@name='Shirt'])"/>
                        </td>
                    </tr>
                    <xsl:apply-templates select="shop/article[@name='Complements']"/>
                    <tr>
                        <td>
                            Numero total de articulos
                        </td>
                        <td colspan="4">
                            <xsl:value-of select="count(/shop/article[@name='Complements'])"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="shop/article">
        <xsl:choose>
            <xsl:when test="@name='Shirt'">
                <span id="maincontent">
                    <tr>
                        <td>
                            <xsl:apply-templates select="@name"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="details"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="price"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="order"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="reference"/>
                        </td>
                    </tr>

                </span>
            </xsl:when>
            <xsl:when test="@name='Complements'">
                <span id="maincontent">
                    <tr>
                        <td>
                            <xsl:apply-templates select="@name"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="details"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="price"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="order"/>
                        </td>
                        <td>
                            <xsl:apply-templates select="reference"/>
                        </td>
                    </tr>
                </span>
            </xsl:when>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="@socks">
        <xsl:value-of select="."/>
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
    <xsl:template match="order">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="reference">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>