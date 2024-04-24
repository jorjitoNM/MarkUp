<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    th,td {
                    border: solid 2px white;
                    color:black;
                    padding: 5px;
                    }
                    th {
                    background-color: #BBEC13;
                    }
                    td {
                    background-color: #8CEDB7;
                    }
                    table {
                    border-collapse: collapse;
                    }
                    * {
                    text-align: center;
                    }
                    #vegetable {
                    background-color: #8CEDB7;
                    }
                    #fruit {
                    background-color; #F175D3;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Food Item</th>
                        <th>Carbs (g)</th>
                        <th>Fiber (g)</th>
                        <th>Fat (g)</th>
                        <th>Energy (kj)</th>
                    </tr>
                    <span id="vegetable">
                        <xsl:for-each select="food_list/food_item[@type='vegetable']">
                                <tr>
                                    <td><xsl:value-of select="name"/></td>
                                    <td><xsl:value-of select="carbs_per_serving"/></td>
                                    <td><xsl:value-of select="fiber_per_serving"/></td>
                                    <td><xsl:value-of select="fat_per_serving"/></td>
                                    <td><xsl:value-of select="kj_per_serving"/></td>
                                </tr> 
                            <xsl:sort data-type="number" select="fiber_per_serving"/>
                        </xsl:for-each>
                    </span>
                    <span id="fruit">
                        <xsl:for-each select="food_list/food_item[@type='fruit']">
                                <tr>
                                    <td><xsl:value-of select="name"/></td>
                                    <td><xsl:value-of select="carbs_per_serving"/></td>
                                    <td><xsl:value-of select="fiber_per_serving"/></td>
                                    <td><xsl:value-of select="fat_per_serving"/></td>
                                    <td><xsl:value-of select="kj_per_serving"/></td>
                                </tr>
                            <xsl:sort data-type="number" select="fiber_per_serving"/>
                        </xsl:for-each>
                    </span>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>