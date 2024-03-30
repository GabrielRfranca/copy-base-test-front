<template>
  <div>
    <label for="Inp_SpreadSheet" class="custom-file-upload">Escolha a planilha que deseja processar</label>
    <input type="file" id="Inp_SpreadSheet" @change="handleFileInput" accept=".csv,.xlsx" aria-label="Escolha a planilha que deseja processar" style="display: none;">
    <div v-if="selectedFile" class="selected-file">Arquivo selecionado: {{ selectedFile.name }}</div>
  </div>
</template>

<script>
import { PostProcessFile } from '../Services/PostProcessFile.js';
import { mapMutations } from 'vuex';

export default {
  name: 'SpreadSheetInput',
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    ...mapMutations(['setResponseData', 'setSuccess']),
    async handleFileInput(event) {
      try {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        const response = await PostProcessFile(formData);
        this.setResponseData(response.data);
        this.setSuccess(true);
      } catch (error) {
        console.error('Erro na requisição:', error);
        this.setSuccess(false);
      }
    }
  }
};
</script>


<style scoped>
.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  background-color: white;
  color: purple;
  border: 2px solid purple;
  border-radius: 20px;
}

.custom-file-upload:hover {
  background-color: purple;
  color: white;
}

.selected-file {
  margin-top: 10px;
}
</style>
