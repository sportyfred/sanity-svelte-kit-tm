<script>
export let value

</script>

<table style="table-layout: auto;">
<tbody>



  <th colspan="4">Exhibitions</th>

 {#each value.utstallningar.rows as row}

 

     {#if row.cells[1]!==''}

 <tr>
    <td class="year">{row.cells[0]}</td>

   {#if row.cells[4]!==''}
      <td><a target="_blank" href="{row.cells[4]}">{row.cells[1]}</a></td>
      
      {:else}
        <td>{row.cells[1]}</td>


{/if}
  <td>{row.cells[2]}</td>
   <td>{row.cells[3]}</td>

  
  </tr>
{/if}

  {/each}
 
  <th colspan="4">Publications</th>

 {#each value.publikationer.rows as row}
 


     {#if row.cells[1]!==''}
      <tr>
    <td class="year">{row.cells[0]}</td>

   {#if row.cells[2]!==''}
      <td colspan="3"><a target="_blank" href="{row.cells[2]}">{row.cells[1]}</a></td>
      
      {:else}
        <td colspan="3">{row.cells[1]}</td>


{/if}
  
  
  
        
 </tr>
{/if}
  
 
  {/each}
 
  <th colspan="4">Grants</th>

 {#each value.stipendier.rows as row}
 {#if row.cells[1]!==''}
 <tr>
     
    <td class="year">{row.cells[0]}</td>

   {#if row.cells[2]!==''}
      <td colspan="3"><a target="_blank" href="{row.cells[2]}">{row.cells[1]}</a></td>
      
      {:else}
        <td colspan="3">{row.cells[1]}</td>


{/if}
  
  
  
        


  
  </tr>{/if}
  {/each}
 </table>

 <style>

 @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr { 
    display: block; 
  }
  
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr { 
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { border: 1px solid #ccc; }
  
  td{ 
    /* Behave  like a "row" */
    border: none;
   
    position: relative;
        padding-left: 30%; 
    
  }
  

 
.year {
   padding-left: 2%; 
 font-size: 80%;
  position: absolute;
}

 }

 th {
 text-align:left;
 padding: 20px;}
 </style>
