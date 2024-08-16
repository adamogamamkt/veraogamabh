// Substituir a URL completa pela URL do domínio principal
// window.history.pushState({}, document.title, "/");

// FOOTER PÁGINAS
document.addEventListener("DOMContentLoaded", function() {
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
});

// HEADER PÁGINAS
document.addEventListener("DOMContentLoaded", function() {
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
});

// Atualize o cache dos arquivos CSS e JS
window.onload = function() {
  // Função para adicionar um timestamp ao final da URL
  function refreshCache(id) {
      var element = document.getElementById(id);
      if (element) {
          var currentSrc = element.getAttribute('href') || element.getAttribute('src');
          var newSrc = currentSrc.split('?')[0] + '?v=' + new Date().getTime();
          if (element.tagName.toLowerCase() === 'link') {
              element.setAttribute('href', newSrc);
          } else if (element.tagName.toLowerCase() === 'script') {
              element.setAttribute('src', newSrc);
          }
      }
    }
};

// TABELA MOSKITOFF
document.addEventListener("DOMContentLoaded", function() {
    // URL do arquivo txt
    var txtFile = 'dados/dados_moskitoff.txt';

    // Cria um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', txtFile, true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        // Obtém o texto do arquivo
        var txtData = xhr.responseText;

        // Divide o texto em linhas (cada linha é separada por uma nova linha)
        var lines = txtData.split('\n');
        var tableBody = document.querySelector("#dados_moskitoff tbody");

        // Itera sobre cada linha
        lines.forEach(function(line) {
          // Divide a linha em colunas com base na tabulação
          var columns = line.split('\t');

          // Cria uma nova linha na tabela
          var row = document.createElement('tr');

          // Adiciona cada coluna à linha
          columns.forEach(function(column) {
            var cell = document.createElement('td');
            cell.textContent = column;
            row.appendChild(cell);
          });

          // Adiciona a linha ao corpo da tabela
          tableBody.appendChild(row);
        });
      }
    };

    xhr.send();
  });

// TABELA SUNLESS
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA NEGRA ROSA HAIR
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_negrarosa_hair.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_negrarosa_hair tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA NEGRA ROSA SKIN
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_negrarosa_skin.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_negrarosa_skin tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SANAVITA VITAMINAS
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sanavita_vitaminas.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sanavita_vitaminas tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SANAVITA ESSENCIAL
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sanavita_essencial.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sanavita_essencial tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SANAVITA VITAL
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sanavita_vital.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sanavita_vital tbody");

      // Itera sobre cada linha
      lines.forEach(function(line) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP OURO
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_ouro.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_ouro tbody");

      // Itera sobre cada linha
      lines.forEach(function(line, index) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a classe 'bold-data-row' às linhas desejadas
        if (index === 0 ||              // Primeira linha
          index === 1 ||              // Segunda linha
          index === lines.length - 2 || // Penúltima linha
          index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP PRATA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_prata.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_prata tbody");

      // Itera sobre cada linha
      lines.forEach(function(line, index) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a classe 'bold-data-row' às linhas desejadas
        if (index === 0 ||              // Primeira linha
          index === 1 ||              // Segunda linha
          // index === lines.length - 2 || // Penúltima linha
          index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP BRONZE
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_bronze.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_bronze tbody");

      // Itera sobre cada linha
      lines.forEach(function(line, index) {
        // Divide a linha em colunas com base na tabulação
        var columns = line.split('\t');

        // Cria uma nova linha na tabela
        var row = document.createElement('tr');

        // Adiciona cada coluna à linha
        columns.forEach(function(column) {
          var cell = document.createElement('td');
          cell.textContent = column;
          row.appendChild(cell);
        });

        // Adiciona a classe 'bold-data-row' às linhas desejadas
        if (index === 0 ||              // Primeira linha
          index === 1 ||              // Segunda linha
          // index === lines.length - 2 || // Penúltima linha
          index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});