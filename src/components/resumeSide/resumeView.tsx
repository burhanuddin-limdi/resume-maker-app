import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page:{
        display:'flex',
        height:'75vh',
        textAlign:'center',
        alignItems:'center',

        
    }
})
export const ResumeView = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View></View>
        <View></View>

      </Page>
    </Document>
  )
}
