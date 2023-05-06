// import { onMounted, onUnmounted, Ref, ref } from "vue";

// const useClick = ()=>{
//     const isClickOut = ref<boolean>(false)
//     const handler = (e:Event)=>{
//         if (dropdownRef.value?.contains(e.target as HTMLElement)){
//             isClickOut.value = false
//         }else{
//             isClickOut.value = true
//         }
//     }
//     onMounted(()=>{
//         document.addEventListener('click',handler)
//     })
//     onUnmounted(()=>{
//         document.removeEventListener('click',handler)
//     })
//     return {isClickOut}
// }
// export default useClick