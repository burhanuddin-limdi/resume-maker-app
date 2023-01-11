import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    innerWidth :10,
    outerWidth : 10

  }
});

// Create Document Component
export const MyDocument:React.FC = () => {
  return(
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti quidem nemo ipsam quae! Suscipit, accusantium. Illo aspernatur, reiciendis tenetur ut vitae quas unde nemo quaerat sint delectus ab consectetur.</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in nemo error similique? Quam quas tempore repellendus voluptate nostrum saepe neque adipisci reprehenderit vel sint. Totam suscipit ducimus recusandae aperiam ex esse.</Text>
      </View>
    </Page>
  </Document>
)}
