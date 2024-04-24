<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
                        <th>Details</th>
                        <th>Price</th>
                        <th>Order</th>
                        <th>Reference</th>
                    </tr>
                    <xsl:apply-templates select="shop/article[@name='Shirt']"/>
                    <tr>
                    <td>Number of Shirts</td>
                    <td colspan="4"><xsl:value-of select="count(shop/article[@name='Shirt'])"/></td></tr>
                    <xsl:apply-templates select="shop/article[@name='Complements']"/>
                    <tr><td>Number of Shirts</td>
                    <td colspan="4"><xsl:value-of select="count(shop/article[@name='Complements'])"/></td></tr>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="shop/article[@name='Shirt']">
        <tr id="maincontent">
            <td><xsl:apply-templates select="@name"/></td>
            <td><xsl:apply-templates select="details"/></td>
            <td><xsl:apply-templates select="price"/></td>
            <td><xsl:apply-templates select="order"/></td>
            <td><xsl:apply-templates select="reference"/></td>
        </tr>
    </xsl:template>
    <xsl:template match="shop/article[@name='Complements']">
        <tr id="maincontent">
            <td><xsl:apply-templates select="@name"/></td>
            <td><xsl:apply-templates select="details"/></td>
            <td><xsl:apply-templates select="price"/></td>
            <td><xsl:apply-templates select="order"/></td>
            <td><xsl:apply-templates select="reference"/></td>
        </tr>
    </xsl:template>
    <xsl:template match="@name">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="details">
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