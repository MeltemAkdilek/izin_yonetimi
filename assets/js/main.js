/*
 * Tez Medikal İzin Yönetim Sistemi
 * Main JavaScript - Global Functions
 * Version: 1.0
 */

// ===== GLOBAL STATE =====
let currentUser = null;
let notifications = [];
let isModalOpen = false;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  // Set default user from localStorage or mock
  currentUser = getCurrentUser();

  // Initialize components
  initDropdowns();
  initModals();
  initToasts();
  initTabs();
  initDatePickers();

  console.log('Tez Medikal İzin Yönetim Sistemi - Mockup initialized');
});

// ===== USER MANAGEMENT =====
function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (userJson) {
    return JSON.parse(userJson);
  }

  // Default test user (Personel - Saha)
  return window.MockData.getPersonelById(1);
}

function setCurrentUser(userId) {
  const user = window.MockData.getPersonelById(userId);
  localStorage.setItem('currentUser', JSON.stringify(user));
  currentUser = user;
  return user;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '/index.html';
}

// ===== DROPDOWN COMPONENT =====
function initDropdowns() {
  document.addEventListener('click', function(e) {
    const dropdownToggle = e.target.closest('[data-dropdown-toggle]');

    if (dropdownToggle) {
      e.preventDefault();
      const targetId = dropdownToggle.getAttribute('data-dropdown-toggle');
      const dropdownMenu = document.getElementById(targetId);

      if (dropdownMenu) {
        const isVisible = dropdownMenu.style.display === 'block';

        // Close all dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
        });

        // Toggle current dropdown
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
      }
    } else {
      // Close all dropdowns when clicking outside
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
}

// ===== MODAL COMPONENT =====
function initModals() {
  // Close modal on backdrop click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // Close modal on close button click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') ||
        e.target.closest('.modal-close')) {
      closeModal();
    }
  });

  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById('modal-backdrop');

  if (modal && backdrop) {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isModalOpen = true;
  }
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const modals = document.querySelectorAll('.modal');

  if (backdrop) {
    backdrop.style.display = 'none';
  }

  modals.forEach(modal => {
    modal.style.display = 'none';
  });

  document.body.style.overflow = '';
  isModalOpen = false;
}

// ===== TOAST / NOTIFICATION COMPONENT =====
function initToasts() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} slide-down`;
  toast.innerHTML = `
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <div style="flex-shrink: 0;">
        ${getToastIcon(type)}
      </div>
      <div style="flex: 1;">
        <p style="margin: 0; font-weight: 600;">${getToastTitle(type)}</p>
        <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--neutral-600);">${message}</p>
      </div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, duration);
}

function getToastIcon(type) {
  const icons = {
    'success': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--success);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    'error': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--error);"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    'warning': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--warning);"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'info': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--info);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
  };
  return icons[type] || icons['info'];
}

function getToastTitle(type) {
  const titles = {
    'success': 'Başarılı',
    'error': 'Hata',
    'warning': 'Uyarı',
    'info': 'Bilgi'
  };
  return titles[type] || titles['info'];
}

// ===== TABS COMPONENT =====
function initTabs() {
  document.addEventListener('click', function(e) {
    const tab = e.target.closest('[data-tab]');
    if (tab) {
      e.preventDefault();
      const targetId = tab.getAttribute('data-tab');
      const tabGroup = tab.closest('.tabs');

      // Remove active class from all tabs in the same group
      tabGroup.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
      });

      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all tab content in the same group
      const tabContainer = tabGroup.parentElement;
      tabContainer.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });

      // Show target tab content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    }
  });
}

// ===== DATE PICKER (Basit HTML5) =====
function initDatePickers() {
  // Set min date to today for date inputs
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];

  dateInputs.forEach(input => {
    if (!input.hasAttribute('min')) {
      input.setAttribute('min', today);
    }
  });
}

// ===== FORM VALIDATION =====
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  const requiredInputs = form.querySelectorAll('[required]');

  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');

      // Show error message
      let errorDiv = input.nextElementSibling;
      if (!errorDiv || !errorDiv.classList.contains('invalid-feedback')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.textContent = 'Bu alan zorunludur';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
      }
    } else {
      input.classList.remove('is-invalid');
      const errorDiv = input.nextElementSibling;
      if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
        errorDiv.remove();
      }
    }
  });

  return isValid;
}

// Clear form validation
function clearFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.querySelectorAll('.is-invalid').forEach(input => {
    input.classList.remove('is-invalid');
  });

  form.querySelectorAll('.invalid-feedback').forEach(msg => {
    msg.remove();
  });
}

// ===== FILE UPLOAD HANDLER =====
function handleFileUpload(inputId, displayId) {
  const input = document.getElementById(inputId);
  const display = document.getElementById(displayId);

  if (input && display) {
    input.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        display.textContent = file.name;
        display.style.color = 'var(--success)';
      }
    });
  }
}

// ===== LOADING SPINNER =====
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '<div class="d-flex justify-content-center align-items-center" style="min-height: 200px;"><div class="spinner"></div></div>';
  }
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '';
  }
}

// ===== NOTIFICATION BADGE =====
function updateNotificationBadge(count) {
  const badge = document.getElementById('notification-badge');
  if (badge) {
    if (count > 0) {
      badge.textContent = count > 9 ? '9+' : count;
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// ===== TABLE ACTIONS =====
function deleteRow(tableId, rowId) {
  const table = document.getElementById(tableId);
  if (table) {
    const row = table.querySelector(`tr[data-id="${rowId}"]`);
    if (row) {
      row.remove();
      showToast('Kayıt silindi', 'success');
    }
  }
}

// ===== UTILITY FUNCTIONS =====
function formatCurrency(amount) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY'
  }).format(amount);
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
}

function formatDateTime(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== SEARCH & FILTER =====
function filterTable(tableId, searchInputId) {
  const input = document.getElementById(searchInputId);
  const table = document.getElementById(tableId);

  if (!input || !table) return;

  input.addEventListener('keyup', function() {
    const filter = input.value.toUpperCase();
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const text = row.textContent || row.innerText;

      if (text.toUpperCase().indexOf(filter) > -1) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  });
}

// ===== EXPORT FUNCTIONS =====
window.IzinYonetim = {
  getCurrentUser,
  setCurrentUser,
  logout,
  openModal,
  closeModal,
  showToast,
  validateForm,
  clearFormValidation,
  handleFileUpload,
  showLoading,
  hideLoading,
  updateNotificationBadge,
  deleteRow,
  formatCurrency,
  formatDate,
  formatDateTime,
  capitalizeFirst,
  filterTable
};
