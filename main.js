function submitQuiz() {
      const correctAnswers = ['correct1', 'correct2', 'correct3', 'correct4', 'correct5'];
      let score = 0;
      
      correctAnswers.forEach(id => {
        const answer = document.getElementById(id);
        if (answer.checked) {
          score += 1;
        }
      });
      
      const totalScore = score * 20; // Setiap jawaban benar bernilai 20
      document.getElementById('result').innerText = `Nilai Anda adalah: ${totalScore}`;
      result.style.display = "flex"
    }