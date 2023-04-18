<?php

use App\Models\Department;
use App\Models\Ship;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('stock_equipments', function (Blueprint $table) {
            $table->foreignIdFor(Ship::class)->constrained();
            $table->foreignIdFor(Department::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stock_equipments', function (Blueprint $table) {
            //
        });
    }
};
