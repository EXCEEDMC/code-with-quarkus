window.onload = function() {
// 회원 정보 읽고, json 형태 변환 후 화면 갱신(비동기 처리)
    fetch('/profile/info')
        .then(res => res.json())
        .then(data => {
            // 기존 정보 테이블 표시 (유지)
            document.getElementById('infoUsername').textContent = data.username;
            document.getElementById('infoEmail').textContent = data.email;
            document.getElementById('infoPhone').textContent = data.phone;
            if (data.profileImage) {
                document.getElementById('profileImg').src =
                    '/uploads/profile/' + data.profileImage;
            }
            // 수정 폼에 기존 값 자동 채우기
            document.getElementById('updateEmail').value = data.email;
            document.getElementById('updatePhone').value = data.phone;

            // Tooltip 으로 사용자명 표시 (navUsername span 방식 → 교체)
            const profileLink = document.getElementById('profileNavLink');
            if (profileLink) {
                profileLink.setAttribute('data-bs-title', ' ' + data.username);
                new bootstrap.Tooltip(profileLink);
        }
    });
}

function validateAndUpdate() {
    let valid = true;

    const email = document.getElementById('updateEmail').value.trim();
    const phone = document.getElementById('updatePhone').value.trim();

    // ① 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError('updateEmail', 'updateEmailMsg',
            '올바른 이메일 형식이 아닙니다.');
        valid = false;
    } else {
        clearFieldError('updateEmail');
    }
// ② 연락처 형식 검사
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        showFieldError('updatePhone', 'updatePhoneMsg',
            '010-0000-0000 형식으로 입력해주세요.');
        valid = false;
    } else {
        clearFieldError('updatePhone');
    }

    if (valid) document.getElementById('updateForm').submit();
}
// profile.js 전용 showError / clearError
function showFieldError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    const msg = document.getElementById(msgId);
    if (msg) msg.textContent = message;
}
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}
