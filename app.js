const $ = (s) => document.querySelector(s);
$('#year').textContent = new Date().getFullYear();

let currentMode = 'audio';
document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
  currentMode = btn.dataset.mode;
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b === btn));
  $('#mediaPlaceholder').innerHTML = currentMode === 'audio'
    ? '<span>♫</span><b>Player de áudio</b><small>Adicione uma faixa para ouvir.</small>'
    : '<span>▷</span><b>Player de vídeo</b><small>Adicione um clipe para assistir.</small>';
  $('#audioPlayer').hidden = true; $('#videoPlayer').hidden = true;
}));

function loadMedia(inputSelector, playerSelector, type) {
  $(inputSelector).addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const player = $(playerSelector);
    player.src = URL.createObjectURL(file);
    $('#mediaPlaceholder').hidden = true;
    $('#audioPlayer').hidden = type !== 'audio';
    $('#videoPlayer').hidden = type !== 'video';
    player.load();
  });
}
loadMedia('#audioUpload','#audioPlayer','audio');
loadMedia('#videoUpload','#videoPlayer','video');

$('#coverUpload').addEventListener('change', e => {
  const file=e.target.files[0]; if(!file)return;
  const url=URL.createObjectURL(file);
  $('#mediaPlaceholder').hidden=false;
  $('#mediaPlaceholder').innerHTML=`<img src="${url}" alt="Capa selecionada" style="max-height:110px;max-width:100%;border-radius:8px"><b>Capa selecionada</b>`;
  $('#audioPlayer').hidden=true; $('#videoPlayer').hidden=true;
});

$('#pollForm').addEventListener('submit', e => {
  e.preventDefault();
  const choice = new FormData(e.target).get('song');
  $('#pollMessage').textContent = `Voto de demonstração registrado para: ${choice}. Ainda não foi enviado a um servidor.`;
});
$('#postForm').addEventListener('submit', e => {
  e.preventDefault();
  const field=$('#postText'); const value=field.value.trim(); if(!value)return;
  const post=document.createElement('div'); post.className='post';
  const name=document.createElement('b'); name.textContent='Você';
  const body=document.createElement('p'); body.textContent=value;
  const small=document.createElement('small'); small.textContent='Agora • demonstração local';
  post.append(name,body,small); $('#posts').prepend(post); field.value='';
});
$('#chatButton').addEventListener('click', () => alert('O chat com NANN será conectado na próxima etapa.'));
$('#profileButton').addEventListener('click', () => { $('#profileMessage').textContent='O cadastro e o login serão ativados quando conectarmos o banco de dados e a autenticação.'; });
$('#searchInput').addEventListener('input', e => {
  const q=e.target.value.toLowerCase();
  document.querySelectorAll('.panel').forEach(panel => panel.style.opacity = !q || panel.innerText.toLowerCase().includes(q) ? '1' : '.35');
});
