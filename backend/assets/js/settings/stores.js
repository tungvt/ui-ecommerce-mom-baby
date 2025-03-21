(function($) {
	$(function() {

		$('.product-cat').select2({
			placeholder		: "Lọc theo danh mục sản phẩm",
			allowClear		: true,
		});
		$(".product-cat").val('').trigger('change');

		var aColDefs;
		aColDefs = [
			{ "targets": 0, orderable: false },
			{ "targets": 1 },
			{ "targets": 2, orderable: false },
			{ "targets": 3, orderable: false },
			{ "targets": 4, orderable: false },
			{ "targets": 5 },
			{ "targets": 6 },
			{ "targets": 7, orderable: false },
		];

		data.dtTable = $('#dtStores').DataTable({
			responsive		: true,
			info			: false,
			sDom			: 'rtip',
			order 			: [[1, "desc"]],
			columnDefs		: aColDefs,
			language 		: {
				sLengthMenu		: "Hiển thị _MENU_ bản ghi",
				emptyTable		: "Không tìm thấy bản ghi nào!!!",
				zeroRecords		: "Không tìm thấy bản ghi nào!!!",
				paginate		: {
					'first'		: "Trang đầu",
					'last'		: "Trang cuối",
					'next'		: "Tiếp theo",
					'previous'	: "Quay lại",
				},
			},
		});

		data.dtTable.column(1).every(function() {
			var that = this;
			$('#store-name').on('keyup change', function() {
				if(that.search() !== this.value) {
					that.search(this.value).draw();
				}
			});
		});
		data.dtTable.column(3).every(function() {
			var that = this;
			$('#store-phone').on('keyup change', function() {
				if(that.search() !== this.value) {
					that.search(this.value).draw();
				}
			});
		});
		data.dtTable.column(5).every(function() {
			var that = this;
			$('.product-cat').on('change', function() {
				if(that.search() !== this.value) {
					that.search(this.value).draw();
				}
			});
		});

	});
})(jQuery);