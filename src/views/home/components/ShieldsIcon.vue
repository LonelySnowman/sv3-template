<template>
   <div class="prj-dependencies">
      <div>
         <img
            src="https://sv3-docs.snowhouse.space/logo.png"
            alt="SV3-Family"
            width="150px"
         />
      </div>
      <div>
         <img
            src="https://skillicons.dev/icons?i=vue,vite,ts,scss"
            alt="skill"
         />
      </div>
      <div>
         <img
            src="https://img.shields.io/badge/-Pinia-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-ElementPlus-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
         />
      </div>
      <div>
         <img
            src="https://img.shields.io/badge/-ESLint-E34F26?logo=eslint&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Prettier-1572B6?logo=prettier&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-StyleLint-oringe?logo=stylelint&style=flat-square&logoColor=white"
         />
      </div>
   </div>
</template>

<style scoped lang="scss">
.prj-dependencies {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: row wrap;
   height: max-content;
   flex-direction: column;
   img {
      margin: 5px;
   }
}
</style>
