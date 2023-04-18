<?php

use App\Models\JobList;
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
        Schema::table('equipment_datasheets', function (Blueprint $table) {
            $table->foreignIdFor(JobList::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('equipment_datasheets', function (Blueprint $table) {
            //
        });
    }
};
