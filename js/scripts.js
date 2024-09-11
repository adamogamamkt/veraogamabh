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

// TABELA LOREL DPGP OURO MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_ouro_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_ouro_mg tbody");

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
        if (index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP OURO BA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_ouro_ba.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_ouro_ba tbody");

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

// TABELA LOREL DPGP OURO RJ
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_ouro_rj.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_ouro_rj tbody");

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
        if (index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP OURO ES
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_ouro_es.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_ouro_es tbody");

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

// TABELA LOREL DPGP PRATA MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_prata_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_prata_mg tbody");

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
        if (index === lines.length - 1) { // Última linha
        row.classList.add('bold-data-row');
      }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREL DPGP PRATA BA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_prata_ba.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_prata_ba tbody");

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

// TABELA LOREL DPGP BRONZE MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_dpgp_bronze_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_dpgp_bronze_mg tbody");

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

// TABELA INTEGRAL MÉDICA FIT
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_integralmedica_fit.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_integralmedica_fit tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA INTEGRAL MÉDICA PLUS
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_integralmedica_plus.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_integralmedica_plus tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA AUSTRALIAN GOLD ESMERALDA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_australian_gold_esmeralda.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_australian_gold_esmeralda tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA AUSTRALIAN GOLD TOPÁZIO
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_australian_gold_topazio.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_australian_gold_topazio tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SC JOHNSON OURO
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_scjohnson_ouro.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_scjohnson_ouro tbody");

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
          index === 2 ||              // Terceira linha
          index === 3 ||              // Quarta linha
          index === 4 ||              // Quinta linha
          index === 5 ||              // Sexta linha
          index === 6 ||            // Sétima linha
          index === 7) {           // Oitava linha
        row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SC JOHNSON PRATA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_scjohnson_prata.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_scjohnson_prata tbody");

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
          index === 2 ||              // Terceira linha
          index === 3 ||              // Quarta linha
          index === 4 ||              // Quinta linha
          index === 5 ||              // Sexta linha
          index === 6 ||            // Sétima linha
          index === 7) {           // Oitava linha
        row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS MAR
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_mar.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_mar tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS MAR BA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_mar_ba.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_mar_ba tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS MAR RJ
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_mar_rj.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_mar_rj tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS MAR ES
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_mar_es.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_mar_es tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS MAR MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_mar_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_mar_mg tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_sol.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_sol tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL BA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_sol_ba.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_sol_ba tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL ES
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_sol_es.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_sol_es tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL RJ
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_sol_rj.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_sol_rj tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_sol_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_sol_mg tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS AREIA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_areia.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_areia tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS AREIA BA
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_areia_ba.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_areia_ba tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS AREIA ES
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_areia_es.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_areia_es tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS AREIA RJ
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_areia_rj.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_areia_rj tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA SUNLESS SOL MG
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_sunless_areia_mg.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_sunless_areia_mg tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA CENOURA E BRONZE VIBRANTE
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_cenoura_bronze_vibrante.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_cenoura_bronze_vibrante tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA CENOURA E BRONZE TROPICAL
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_cenoura_bronze_tropical.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_cenoura_bronze_tropical tbody");

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
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREAL LBD DIAMANTE
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_lbd_diamante.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_lbd_diamante tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});

// TABELA LOREAL LBD RUBI
document.addEventListener("DOMContentLoaded", function() {
  // URL do arquivo txt
  var txtFile = 'dados/dados_loreal_lbd_rubi.txt';

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('GET', txtFile, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Obtém o texto do arquivo
      var txtData = xhr.responseText;

      // Divide o texto em linhas (cada linha é separada por uma nova linha)
      var lines = txtData.split('\n');
      var tableBody = document.querySelector("#dados_loreal_lbd_rubi tbody");

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
        if (index === 0) { // Adiciona a classe às linhas 1 e 2
          row.classList.add('bold-data-row');
        }
        
        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
      });
    }
  };

  xhr.send();
});