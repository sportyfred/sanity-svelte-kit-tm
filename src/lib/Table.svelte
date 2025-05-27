<script>
export let author

</script>

<table style="table-layout: auto;">
<tbody>



  <th colspan="4">Exhibitions</th>

 {#each author.utstallningar.rows as row}

 

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

 {#each author.publikationer.rows as row}
 


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

 {#each author.stipendier.rows as row}
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