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
                    <xsl:for-each select="shop/article">
                            <tr id="maincontent">
                                <td>
                                    <xsl:value-of select="@name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="details"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                                <td>
                                    <xsl:value-of select="order"/>
                                </td>
                                <td>
                                    <xsl:value-of select="reference"/>
                                </td>
                            </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>